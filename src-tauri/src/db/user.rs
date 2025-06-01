#[derive(Debug, Clone, PartialEq, Eq, serde::Serialize, serde::Deserialize)]
pub struct Data {
    pub username: String,
    pub id: String,
    pub email: String,
    pub password: String,
}

impl Data {
    pub fn empty() -> Self {
        Data {
            username: String::new(),
            id: String::new(),
            email: String::new(),
            password: String::new(),
        }
    }

    pub fn new(username: String, id: String, email: String, password: String) -> Self {
        Data {
            username,
            id,
            email,
            password,
        }
    }
    pub fn is_empty(&self) -> bool {
        self.username.is_empty()
            && self.id.is_empty()
            && self.email.is_empty()
            && self.password.is_empty()
    }
    pub fn username(&self) -> &str {
        &self.username
    }
    pub fn id(&self) -> &str {
        &self.id
    }
    pub fn email(&self) -> &str {
        &self.email
    }
    pub fn password(&self) -> &str {
        &self.password
    }
    pub fn set_username(&mut self, username: String) {
        self.username = username;
    }
    pub fn set_id(&mut self, id: String) {
        self.id = id;
    }
    pub fn set_email(&mut self, email: String) {
        self.email = email;
    }
    pub fn set_password(&mut self, password: String) {
        self.password = password;
    }
    pub fn to_json_or_empty(&self) -> String {
        serde_json::to_string(self).unwrap_or_else(|_| String::new())
    }
    pub fn from_json(json: &str) -> Result<Self, serde_json::Error> {
        serde_json::from_str(json)
    }
}

#[derive(Debug, Clone, PartialEq, Eq, serde::Serialize, serde::Deserialize)]
pub struct CryptBadges {
    pub tester: bool,
    pub developer: bool,
    pub admin: bool,
}

impl CryptBadges {
    pub fn blank() -> Self {
        CryptBadges {
            tester: false,
            developer: false,
            admin: false,
        }
    }

    pub fn new(tester: bool, developer: bool, admin: bool) -> Self {
        CryptBadges {
            tester,
            developer,
            admin,
        }
    }
    pub fn is_blank(&self) -> bool {
        !self.tester && !self.developer && !self.admin
    }
    pub fn is_developer(&self) -> bool {
        self.developer
    }
    pub fn is_tester(&self) -> bool {
        self.tester
    }
    pub fn is_admin(&self) -> bool {
        self.admin
    }
    pub fn from_json(json: &str) -> Result<Self, serde_json::Error> {
        serde_json::from_str(json)
    }

    pub fn grant(&mut self, badge: &str) {
        match badge {
            "tester" => self.tester = true,
            "developer" => self.developer = true,
            "admin" => self.admin = true,
            _ => {}
        }
    }

    pub fn grant_tester(&mut self) {
        self.tester = true;
    }
    pub fn grant_developer(&mut self) {
        self.developer = true;
    }
    pub fn grant_admin(&mut self) {
        self.admin = true;
    }
    pub fn to_json_or_empty(&self) -> String {
        serde_json::to_string(self).unwrap_or_else(|_| String::new())
    }

    pub fn revoke(&mut self, badge: &str) {
        match badge {
            "tester" => self.tester = false,
            "developer" => self.developer = false,
            "admin" => self.admin = false,
            _ => {}
        }
    }

    pub fn revoke_tester(&mut self) {
        self.tester = false;
    }

    pub fn revoke_developer(&mut self) {
        self.developer = false;
    }

    pub fn revoke_admin(&mut self) {
        self.admin = false;
    }
}
