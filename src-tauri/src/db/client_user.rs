/*
* template example client user info (represented as json, turn into sql):
*
{
    "os": "windows/macos/[distro root] linux",
    "download": "x86_64/arm64",
    "version": "0.0.0",
    "user-data": {
        "username": "lynx-dev",
        "id": "1234",
        "email": "user@cypherlynx.org",
        "password": "securepassword123"
    },
    "crypt-badges": {
        "tester": false,
        "developer": true,
        "admin": false
    }
}
*/

use super::user::{CryptBadges, Data as UserData};

#[derive(Debug, Clone, PartialEq, Eq, serde::Serialize, serde::Deserialize, sqlx::FromRow)]
struct Pair {
    pub id: String,
    pub username: String,
    pub email: String,
    pub password: String,
    pub os: String,
    pub download: String,
    pub is_tester: bool,
    pub is_developer: bool,
    pub is_admin: bool,
}

impl Pair {
    pub fn new(
        id: String,
        username: String,
        email: String,
        password: String,
        os: String,
        download: String,
        is_tester: bool,
        is_developer: bool,
        is_admin: bool,
    ) -> Self {
        Pair {
            id,
            username,
            email,
            password,
            os,
            download,
            is_tester,
            is_developer,
            is_admin,
        }
    }
    pub fn empty() -> Self {
        Pair {
            id: String::new(),
            username: String::new(),
            email: String::new(),
            password: String::new(),
            os: String::new(),
            download: String::new(),
            is_tester: false,
            is_developer: false,
            is_admin: false,
        }
    }
    pub fn new_no_badges(
        id: String,
        username: String,
        email: String,
        password: String,
        os: String,
        download: String,
    ) -> Self {
        Pair {
            id,
            username,
            email,
            password,
            os,
            download,
            is_tester: false,
            is_developer: false,
            is_admin: false,
        }
    }

    fn new_just_badges(is_tester: bool, is_developer: bool, is_admin: bool) -> Self {
        Pair {
            id: String::new(),
            username: String::new(),
            email: String::new(),
            password: String::new(),
            os: String::new(),
            download: String::new(),
            is_tester,
            is_developer,
            is_admin,
        }
    }

    pub fn from(
        id: String,
        username: String,
        email: String,
        password: String,
        os: String,
        download: String,
        is_tester: bool,
        is_developer: bool,
        is_admin: bool,
    ) -> Self {
        Pair {
            id,
            username,
            email,
            password,
            os,
            download,
            is_tester,
            is_developer,
            is_admin,
        }
    }

    pub fn user_data(&self) -> UserData {
        UserData::new(
            self.username.clone(),
            self.id.clone(),
            self.email.clone(),
            self.password.clone(),
        )
    }

    pub fn is_empty(&self) -> bool {
        self.id.is_empty()
            && self.username.is_empty()
            && self.email.is_empty()
            && self.password.is_empty()
            && self.os.is_empty()
            && self.download.is_empty()
    }

    pub fn to_json_or_empty(&self) -> String {
        serde_json::to_string(self).unwrap_or_else(|_| String::new())
    }
    pub fn from_json(json: &str) -> Result<Self, serde_json::Error> {
        serde_json::from_str(json)
    }
    pub fn crypt_badges(&self) -> CryptBadges {
        CryptBadges {
            tester: self.is_tester,
            developer: self.is_developer,
            admin: self.is_admin,
        }
    }
}
