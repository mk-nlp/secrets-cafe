use surrealdb::sql::{Datetime, Thing};
use crate::handler::api::AsRes;
use super::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct PostTable {
    pub content: String,
    pub at: Datetime,
    pub state: PostState,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct PostTableFull {
    pub id: Thing,
    pub content: String,
    pub at: Datetime,
    pub state: PostState,
}

impl AsRes for PostTable {}
impl AsRes for PostTableFull {}
