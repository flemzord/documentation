(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var a=n(1),l=n(9),r=(n(0),n(329)),s=n(340),i=n(341),o=n(331),c=n(336),u=n(332),b={last_modified_on:"2021-01-09",$schema:"/.meta/.schemas/guides.json",title:"Create a blazingly fast REST API in Rust (Part 1/2)",description:"How to create a blazingly fast REST API in Rust, with zero-cost abstraction and very low overhead - Part 1/2",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","language: rust"],hide_pagination:!0},p={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Create a blazingly fast REST API in Rust (Part 1/2)",description:"How to create a blazingly fast REST API in Rust, with zero-cost abstraction and very low overhead - Part 1/2",permalink:"/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1",readingTime:"13 min read",source:"@site/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: rust",permalink:"/guides/tags/language-rust"}],title:"Create a blazingly fast REST API in Rust (Part 1/2)",truncated:!1,prevItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"},nextItem:{title:"Custom routes",permalink:"/guides/advanced/custom-routes"}},d=[{value:"Twitter clone",id:"twitter-clone",children:[{value:"API design",id:"api-design",children:[]}]},{value:"Implementation",id:"implementation",children:[{value:"Actix Web",id:"actix-web",children:[]},{value:"Let&#39;s code",id:"lets-code",children:[]},{value:"Validation",id:"validation",children:[]}]},{value:"PostgreSQL",id:"postgresql",children:[{value:"Diesel",id:"diesel",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Live test",id:"live-test",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]},{value:"Useful resources",id:"useful-resources",children:[]}],m={rightToc:d};function g(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rust-lang/www.rust-lang.org/issues/419#issuecomment-443418587"}),"Fast, reliable, productive - Pick three")," | Rust's slogan")),Object(r.b)("p",null,"Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. Coupled with Actix, I should be able to build a fast REST API elegantly."),Object(r.b)("p",null,"The idea behind this article is to see how performant a Rust API can be. I am going to create an API that saves and reads data from/to a PostgreSQL database."),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,'Most of the Rust REST API tests across the web are "',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/sean3z/rest-api-node-vs-rust-c75aa8c96343"}),"Hello World"),"\" applications. They bench direct API I/O with no payload. It's very far from reality. In the part 2 of this article, I will bench our Rust application with an intensive payload.")),Object(r.b)("p",null,"This article is separate in two parts, in this first part you will learn how to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a blazingly fast REST API in Rust"),Object(r.b)("li",{parentName:"ul"},"Connect it to a PostgreSQL database")),Object(r.b)("p",null,"In the second part, we will compare the performance of our application to a Go application."),Object(r.b)("h2",{id:"twitter-clone"},"Twitter clone"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.twitter.com"}),"Twitter"),' is a "microblogging" system that allows people to send and receive short posts called tweets.')),Object(r.b)("p",null,"Let's create a small part of the Twitter API to be able to post, read, and like tweets. The goal is to be able to use our Twitter clone with a massive number of simultaneous fake users."),Object(r.b)(c.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have installed ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rust-lang/cargo"}),"Cargo")," (Rust package manager)"))),Object(r.b)("h3",{id:"api-design"},"API design"),Object(r.b)("p",null,"Our REST API needs to have three endpoints :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"/tweets"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"GET: list last 50 tweets"),Object(r.b)("li",{parentName:"ul"},"POST: create a new tweet"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"/tweets/:id"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"GET: find a tweet by its ID"),Object(r.b)("li",{parentName:"ul"},"DELETE: delete a tweet by its ID"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"/tweets/:id/likes"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"GET: list all likes attached to a tweet"),Object(r.b)("li",{parentName:"ul"},"POST: add +1 like to a tweet"),Object(r.b)("li",{parentName:"ul"},"DELETE: add -1 like to a tweet")))),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"For the sake of simplicity, I will not set up a user management service.")),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"Even though implementing an HTTP server could be fun, I choose to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://actix.rs/"}),"Actix"),", which is ranked as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.techempower.com/benchmarks/#section=data-r18&hw=ph&test=fortune"}),"the most performant framework")," ever by ",Object(r.b)("em",{parentName:"p"},"Techempower"),"."),Object(r.b)("h3",{id:"actix-web"},"Actix Web"),Object(r.b)("p",null,"Actix is an actor framework prevalent in the Rust ecosystem. I am using it as an HTTP server to build our REST API."),Object(r.b)("h3",{id:"lets-code"},"Let's code"),Object(r.b)("p",null,"Three files structured our application."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"main.rs")," to route HTTP requests to the right endpoint"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tweet.rs")," to handle requests on /tweets"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"like.rs")," to handle requests on /tweets/:id/likes")),Object(r.b)(s.a,{centered:!1,className:"square",defaultValue:"main.rs",select:!1,size:null,values:[{group:"Files",label:"main.rs",value:"main.rs"},{group:"Files",label:"tweet.rs",value:"tweet.rs"},{group:"Files",label:"like.rs",value:"like.rs"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"main.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'}),'#[actix_rt::main]\nasync fn main() -> io::Result<()> {\n    env::set_var("RUST_LOG", "actix_web=debug,actix_server=info");\n    env_logger::init();\n\n    HttpServer::new(|| {\n        App::new()\n            // enable logger - always register actix-web Logger middleware last\n            .wrap(middleware::Logger::default())\n            // register HTTP requests handlers\n            .service(tweet::list)\n            .service(tweet::get)\n            .service(tweet::create)\n            .service(tweet::delete)\n            .service(like::list)\n            .service(like::plus_one)\n            .service(like::minus_one)\n    })\n    .bind("0.0.0.0:9090")?\n    .run()\n    .await\n}\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/487198ee7b306f36dbab01f40a44345f85387db2/src/main.rs"}),"main.rs source code"))),Object(r.b)(i.a,{value:"tweet.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="tweet.rs"',title:'"tweet.rs"'}),'pub type Tweets = Response<Tweet>;\n\n#[derive(Debug, Deserialize, Serialize)]\npub struct Tweet {\n    pub id: String,\n    pub created_at: DateTime<Utc>,\n    pub message: String,\n    pub likes: Vec<Like>,\n}\n\nimpl Tweet {\n    pub fn new(message: String) -> Self {\n        Self {\n            id: Uuid::new_v4().to_string(),\n            created_at: Utc::now(),\n            message,\n            likes: vec![],\n        }\n    }\n}\n\n#[derive(Debug, Deserialize, Serialize)]\npub struct TweetRequest {\n    pub message: Option<String>,\n}\n\nimpl TweetRequest {\n    pub fn to_tweet(&self) -> Option<Tweet> {\n        match &self.message {\n            Some(message) => Some(Tweet::new(message.to_string())),\n            None => None,\n        }\n    }\n}\n\n/// list 50 last tweets `/tweets`\n#[get("/tweets")]\npub async fn list() -> HttpResponse {\n    // TODO find the last 50 tweets and return them\n\n    let tweets = Tweets { results: vec![] };\n\n    HttpResponse::Ok()\n        .content_type(APPLICATION_JSON)\n        .json(tweets)\n}\n\n/// create a tweet `/tweets`\n#[post("/tweets")]\npub async fn create(tweet_req: Json<TweetRequest>) -> HttpResponse {\n    HttpResponse::Created()\n        .content_type(APPLICATION_JSON)\n        .json(tweet_req.to_tweet())\n}\n\n/// find a tweet by its id `/tweets/{id}`\n#[get("/tweets/{id}")]\npub async fn get(path: Path<(String,)>) -> HttpResponse {\n    // TODO find tweet a tweet by ID and return it\n    let found_tweet: Option<Tweet> = None;\n\n    match found_tweet {\n        Some(tweet) => HttpResponse::Ok()\n            .content_type(APPLICATION_JSON)\n            .json(tweet),\n        None => HttpResponse::NoContent()\n            .content_type(APPLICATION_JSON)\n            .await\n            .unwrap(),\n    }\n}\n\n/// delete a tweet by its id `/tweets/{id}`\n#[delete("/tweets/{id}")]\npub async fn delete(path: Path<(String,)>) -> HttpResponse {\n    // TODO delete tweet by ID\n    // in any case return status 204\n\n    HttpResponse::NoContent()\n        .content_type(APPLICATION_JSON)\n        .await\n        .unwrap()\n}\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/487198ee7b306f36dbab01f40a44345f85387db2/src/tweet.rs"}),"tweet.rs source code"))),Object(r.b)(i.a,{value:"like.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="like.rs"',title:'"like.rs"'}),'pub type Likes = Response<Like>;\n\n#[derive(Debug, Deserialize, Serialize)]\npub struct Like {\n    pub id: String,\n    pub created_at: DateTime<Utc>,\n}\n\nimpl Like {\n    pub fn new() -> Self {\n        Self {\n            id: Uuid::new_v4().to_string(),\n            created_at: Utc::now(),\n        }\n    }\n}\n\n/// list last 50 likes from a tweet `/tweets/{id}/likes`\n#[get("/tweets/{id}/likes")]\npub async fn list(path: Path<(String,)>) -> HttpResponse {\n    // TODO find likes by tweet ID and return them\n    let likes = Likes { results: vec![] };\n\n    HttpResponse::Ok()\n        .content_type(APPLICATION_JSON)\n        .json(likes)\n}\n\n/// add one like to a tweet `/tweets/{id}/likes`\n#[post("/tweets/{id}/likes")]\npub async fn plus_one(path: Path<(String,)>) -> HttpResponse {\n    // TODO add one like to a tweet\n    let like = Like::new();\n\n    HttpResponse::Created()\n        .content_type(APPLICATION_JSON)\n        .json(like)\n}\n\n/// remove one like from a tweet `/tweets/{id}/likes`\n#[delete("/tweets/{id}/likes")]\npub async fn minus_one(path: Path<(String,)>) -> HttpResponse {\n    // TODO remove one like to a tweet\n    HttpResponse::NoContent()\n        .content_type(APPLICATION_JSON)\n        .await\n        .unwrap()\n}\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/487198ee7b306f36dbab01f40a44345f85387db2/src/like.rs"}),"like.rs source code")))),Object(r.b)("p",null,"With only these three files, our application is ready to receive HTTP requests. In a couple of lines, we have a fully operational application. Actix takes care of the low level boilerplate for us."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="Annotation"',title:'"Annotation"'}),'#[get("/tweets")]\n')),Object(r.b)("p",null,"Annotation is a very convenient way to bind a route to the right path."),Object(r.b)("h3",{id:"validation"},"Validation"),Object(r.b)("p",null,"Let's run our application:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Run our application"',title:'"Run',our:!0,'application"':!0}),"# Go inside the root project directory\n$ cd twitter-clone-rust\n\n# Run the application\n$ cargo run\n")),Object(r.b)("p",null,"And validate that each endpoint with no errors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Curl commands to test our API"',title:'"Curl',commands:!0,to:!0,test:!0,our:!0,'API"':!0}),'# list tweets\ncurl http://localhost:9090/tweets\n\n# get a tweet (return status code: 204 because there is no tweet)\ncurl http://localhost:9090/tweets/abc\n\n# create a tweet\ncurl -X POST -d \'{"message": "This is a tweet"}\' -H "Content-type: application/json" http://localhost:9090/tweets\n\n# delete a tweet (return status code: 204 in any case)\ncurl -X DELETE http://localhost:9090/tweets/abc\n\n# list likes from a tweet\ncurl http://localhost:9090/tweets/abc/likes\n\n# add one like to a tweet\ncurl -X POST http://localhost:9090/tweets/abc/likes\n\n# remove one like to a tweet\ncurl -X DELETE http://localhost:9090/tweets/abc/likes\n')),Object(r.b)("p",null,"At this stage, our application works without any database. Let's go more in-depth and connect it to PostgreSQL."),Object(r.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(r.b)("h3",{id:"diesel"},"Diesel"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://diesel.rs/"}),"Diesel")," is the most popular ORM in Rust to connect to a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database. Combined with Actix, it's a perfect fit to persist in our data. Let's see how we can make that happen. However, Diesel does not support ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tokio-rs/tokio"}),"tokio")," (the asynchronous engine behind Actix), so we have to run it in separate threads using the web::block function, which offloads blocking code (like Diesel's) to do not block the server's thread."),Object(r.b)(o.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Read the Diesel ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://diesel.rs/guides/getting-started/"}),"Getting started")," to generate tables configurations.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="schema.rs"',title:'"schema.rs"'}),"table! {\n    likes (id) {\n        id -> Uuid,\n        created_at -> Timestamp,\n        tweet_id -> Uuid,\n    }\n}\n\ntable! {\n    tweets (id) {\n        id -> Uuid,\n        created_at -> Timestamp,\n        message -> Text,\n    }\n}\n\njoinable!(likes -> tweets (tweet_id));\n\nallow_tables_to_appear_in_same_query!(\n    likes,\n    tweets,\n);\n")),Object(r.b)("p",null,"Diesel uses a macro ",Object(r.b)("inlineCode",{parentName:"p"},"table!...")," and an internal DSL to declare the structure of our tables. There is no magic here. The code is compiled and statically linked at the compilation."),Object(r.b)(s.a,{centered:!1,className:"square",defaultValue:"main.rs",select:!1,size:null,values:[{group:"Files",label:"main.rs",value:"main.rs"},{group:"Files",label:"tweet.rs",value:"tweet.rs"},{group:"Files",label:"like.rs",value:"like.rs"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"main.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="main.rs" {6-11,15-16}',title:'"main.rs"',"{6-11,15-16}":!0}),'#[actix_rt::main]\nasync fn main() -> io::Result<()> {\n    env::set_var("RUST_LOG", "actix_web=debug,actix_server=info");\n    env_logger::init();\n\n    // set up database connection pool\n    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL");\n    let manager = ConnectionManager::<PgConnection>::new(database_url);\n    let pool = r2d2::Pool::builder()\n        .build(manager)\n        .expect("Failed to create pool");\n\n    HttpServer::new(move || {\n        App::new()\n            // Set up DB pool to be used with web::Data<Pool> extractor\n            .data(pool.clone())\n            // enable logger - always register actix-web Logger middleware last\n            .wrap(middleware::Logger::default())\n            // register HTTP requests handlers\n            .service(tweet::list)\n            .service(tweet::get)\n            .service(tweet::create)\n            .service(tweet::delete)\n            .service(like::list)\n            .service(like::plus_one)\n            .service(like::minus_one)\n    })\n    .bind("0.0.0.0:9090")?\n    .run()\n    .await\n}\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/master/src/main.rs"}),"main.rs source code"))),Object(r.b)(i.a,{value:"tweet.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="tweet.rs"',title:'"tweet.rs"'}),"//...\nfn list_tweets(total_tweets: i64, conn: &DBPooledConnection) -> Result<Tweets, Error> {\n    use crate::schema::tweets::dsl::*;\n\n    let _tweets = match tweets\n        .order(created_at.desc())\n        .limit(total_tweets)\n        .load::<TweetDB>(conn)\n    {\n        Ok(tws) => tws,\n        Err(_) => vec![],\n    };\n\n    Ok(Tweets {\n        results: _tweets\n            .into_iter()\n            .map(|t| t.to_tweet())\n            .collect::<Vec<Tweet>>(),\n    })\n}\n\nfn find_tweet(_id: Uuid, conn: &DBPooledConnection) -> Result<Tweet, Error> {\n    use crate::schema::tweets::dsl::*;\n\n    let res = tweets.filter(id.eq(_id)).load::<TweetDB>(conn);\n    match res {\n        Ok(tweets_db) => match tweets_db.first() {\n            Some(tweet_db) => Ok(tweet_db.to_tweet()),\n            _ => Err(Error::NotFound),\n        },\n        Err(err) => Err(err),\n    }\n}\n\nfn create_tweet(tweet: Tweet, conn: &DBPooledConnection) -> Result<Tweet, Error> {\n    use crate::schema::tweets::dsl::*;\n\n    let tweet_db = tweet.to_tweet_db();\n    let _ = diesel::insert_into(tweets).values(&tweet_db).execute(conn);\n\n    Ok(tweet_db.to_tweet())\n}\n\nfn delete_tweet(_id: Uuid, conn: &DBPooledConnection) -> Result<(), Error> {\n    use crate::schema::tweets::dsl::*;\n\n    let res = diesel::delete(tweets.filter(id.eq(_id))).execute(conn);\n    match res {\n        Ok(_) => Ok(()),\n        Err(err) => Err(err),\n    }\n}\n//...\n")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/master/src/tweet.rs"}),"tweet.rs source code"))),Object(r.b)(i.a,{value:"like.rs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:'title="like.rs"',title:'"like.rs"'}),"//...\npub fn list_likes(_tweet_id: Uuid, conn: &DBPooledConnection) -> Result<Likes, Error> {\n    use crate::schema::likes::dsl::*;\n\n    let _likes: Vec<LikeDB> = match likes\n        .filter(tweet_id.eq(_tweet_id))\n        .order(created_at.desc())\n        .load::<LikeDB>(conn)\n    {\n        Ok(lks) => lks,\n        Err(_) => vec![],\n    };\n\n    Ok(Likes {\n        results: _likes\n            .into_iter()\n            .map(|l| l.to_like())\n            .collect::<Vec<Like>>(),\n    })\n}\n\npub fn create_like(_tweet_id: Uuid, conn: &DBPooledConnection) -> Result<Like, Error> {\n    use crate::schema::likes::dsl::*;\n\n    let like = Like::new();\n    let _ = diesel::insert_into(likes)\n        .values(like.to_like_db(_tweet_id))\n        .execute(conn);\n\n    Ok(like)\n}\n\npub fn delete_like(_tweet_id: Uuid, conn: &DBPooledConnection) -> Result<(), Error> {\n    use crate::schema::likes::dsl::*;\n\n    let _likes = list_likes(_tweet_id, conn);\n\n    let like = match &_likes {\n        Ok(_likes) if !_likes.results.is_empty() => _likes.results.first(),\n        _ => None,\n    };\n\n    if like.is_none() {\n        return Ok(());\n    }\n\n    let like_id = Uuid::from_str(like.unwrap().id.as_str()).unwrap();\n\n    let res = diesel::delete(likes.filter(id.eq(like_id))).execute(conn);\n    match res {\n        Ok(_) => Ok(()),\n        Err(err) => Err(err),\n    }\n}\n//...\n")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/evoxmusic/twitter-clone-rust/blob/master/src/like.rs"}),"like.rs source code")))),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"Qovery is going to help you to deploy your application in a few seconds. Let's deploy our Twitter Clone now."),Object(r.b)(s.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"web",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("p",null,"Sign in to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("a",{href:"https://start.qovery.com"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(r.b)(i.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(r.b)(s.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(r.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(s.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(s.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(r.b)("p",null,"Few limitations exist on Windows: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more"))))),Object(r.b)("li",null,Object(r.b)("h3",{id:"sign-up"},"Sign up"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(r.b)("p",null,"Your browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(r.b)("p",null,"Congratulations, you are logged-in.")))),Object(r.b)("p",null,"Qovery needs two files at the root of your project to deploy an application:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".qovery.yml")," to declare the dependencies that your application need (E.g PostgreSQL)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Dockerfile")," to build and run your application.")),Object(r.b)(s.a,{centered:!1,className:"square",defaultValue:".qovery.yml",select:!1,size:null,values:[{group:"Files",label:".qovery.yml",value:".qovery.yml"},{group:"Files",label:"Dockerfile",value:"Dockerfile"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:".qovery.yml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: twitter-clone-rust\n  project: Twitter-Clone\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-postgresql-8628210\nrouters:\n- name: main\n  routes:\n  - application_name: twitter-clone-rust\n    paths:\n    - /\n'))),Object(r.b)(i.a,{value:"Dockerfile",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'# build stage\nFROM rust:latest as cargo-build\n\nRUN apt-get update && apt-get install musl-tools -y\nRUN rustup target add x86_64-unknown-linux-musl\n\nWORKDIR /usr/src/app\nCOPY . .\n\nRUN RUSTFLAGS=-Clinker=musl-gcc cargo build --release --target=x86_64-unknown-linux-musl\n\n###################\n# final stage\nFROM alpine:latest\n\nRUN addgroup -g 1000 app\nRUN adduser -D -s /bin/sh -u 1000 -G app app\n\nWORKDIR /home/app/bin/\nCOPY --from=cargo-build /usr/src/app/target/x86_64-unknown-linux-musl/release/twitter-clone-rust .\n\nRUN chown app:app twitter-clone-rust\nUSER app\n\nEXPOSE 9090\n\nCMD ["./twitter-clone-rust"]\n')))),Object(r.b)("p",null,"Now, commit and push your ",Object(r.b)("inlineCode",{parentName:"p"},".qovery.yml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Dockerfile"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Git commit and push"',title:'"Git',commit:!0,and:!0,'push"':!0}),'$ git add .qovery.yml Dockerfile\n$ git commit -m "add .qovery.yml Dockerfile"\n$ git push -u origin master\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Create DATABASE_URL env var"',title:'"Create',DATABASE_URL:!0,env:!0,'var"':!0}),"$ qovery project env add DATABASE_URL '$QOVERY_DATABASE_MY_POSTGRESQL_8628210_CONNECTION_URI'\n")),Object(r.b)("p",null,"Congratulations, you have deployed your application."),Object(r.b)("h2",{id:"live-test"},"Live test"),Object(r.b)("p",null,"To test our deployed API, execute the following command to find your API root URL:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Get our API root URL"',title:'"Get',our:!0,API:!0,root:!0,'URL"':!0}),"$ qovery status\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS       | DATABASES\nmaster      | running | https://main-gxbuagyvgnkbrp5l-gtw.qovery.io | twitter-clone-rust | my-postgresql-8628210\n\nAPPLICATION NAME   | STATUS  | DATABASES\ntwitter-clone-rust | running | my-postgresql-8628210\n\nDATABASE NAME         | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-postgresql-8628210 | running | POSTGRESQL | 11.5    | <hidden> | <hidden> | <hidden> | <hidden> | twitter-clone-rust\n")),Object(r.b)("p",null,"Then, we can test it with the following CURL commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Curl commands to test our deployed API"',title:'"Curl',commands:!0,to:!0,test:!0,our:!0,deployed:!0,'API"':!0}),'# create a tweet\ncurl -X POST -d \'{"message": "This is a tweet"}\' -H "Content-type: application/json" https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets\n\n# list tweets\ncurl https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets\n\n# get a tweet\ncurl https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets/<change_with_a_valid_id>\n\n# list likes from a tweet\ncurl https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets/<change_with_a_valid_id>/likes\n\n# add one like to a tweet\ncurl -X POST https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets/<change_with_a_valid_id>/likes\n\n# remove one like to a tweet\ncurl -X DELETE https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets/<change_with_a_valid_id>/likes\n\n# delete a tweet\ncurl -X DELETE https://main-gxbuagyvgnkbrp5l-gtw.qovery.io/tweets/<change_with_a_valid_id>\n')),Object(r.b)(o.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"You can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/domains/"}),"add your custom domain"))),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)("p",null,"In this first part we saw how to create a Rust API with Actix and Diesel. In the second part we will compare its performance with a Go application to see which one is the most performant."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Special thanks to ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://twitter.com/imjasonmiller"}),"Jason")," and ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://twitter.com/doctor_code"}),"Kokou")," for your reviews")),Object(r.b)("h2",{id:"useful-resources"},"Useful resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/evoxmusic/twitter-clone-rust"}),"Source code"))),Object(r.b)("p",null,"Do you want to know more about Rust?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.rust-lang.org/inside-rust/"}),"A great blog to follow along with Rust development")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/channel/UC_iD0xppBwwsrM9DegC5cQQ"}),"Jon Gjengset")," - PhD student at MIT in distributed systems and Rust live-coder"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.rust-lang.org/book/"}),"The Rust programming language book")," (Free)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=j_4sadjjWh8"}),"My first service in Rust")," (French video - Fran\xe7ois T.)")),Object(r.b)(u.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},330:function(e,t,n){"use strict";var a=n(1),l=n(0),r=n.n(l),s=n(39),i=n(333),o=n(24),c=n.n(o);t.a=function(e){var t,n=e.to,o=e.href,u=n||o,b=Object(i.a)(u),p=Object(l.useRef)(!1),d=c.a.canUseIntersectionObserver;return Object(l.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,b]),u&&b?r.a.createElement(s.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var n,a;d&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):r.a.createElement("a",Object(a.a)({},e,{href:u}))}},331:function(e,t,n){"use strict";n(335);var a=n(0),l=n.n(a),r=n(328),s=n.n(r);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,i=e.type,o=null;switch(i){case"danger":o="alert-triangle";break;case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return l.a.createElement("div",{className:s()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&l.a.createElement("i",{className:s()("feather","icon-"+(r||o))}),t)}},332:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(330),s=n(328),i=n.n(s);n(131);t.a=function(e){var t=e.children,n=e.className,a=e.badge,s=e.leftIcon,o=e.rightIcon,c=e.size,u=e.target,b=e.to,p=i()("jump-to","jump-to--"+c,n),d=l.a.createElement("div",{className:"jump-to--inner"},l.a.createElement("div",{className:"jump-to--inner-2"},s&&l.a.createElement("div",{className:"jump-to--left"},l.a.createElement("i",{className:"feather icon-"+s})),l.a.createElement("div",{className:"jump-to--main"},a?l.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),l.a.createElement("div",{className:"jump-to--right"},l.a.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return u?l.a.createElement("a",{href:b,target:u,className:p},d):l.a.createElement(r.a,{to:b,className:p},d)}},333:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},334:function(e,t,n){var a=n(25).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||n(10)&&a(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},336:function(e,t,n){"use strict";n(334);var a=n(0),l=n.n(a),r=n(331);t.a=function(e){var t=e.children,n=e.name;return l.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},340:function(e,t,n){"use strict";var a=n(1),l=(n(346),n(342),n(52),n(28),n(20),n(19),n(0)),r=n.n(l),s=n(348),i=n(328),o=n.n(i),c=n(339),u=n.n(c),b=n(347),p=37,d=39;function m(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,l=e.className,s=e.handleKeydown,i=e.style,c=e.values,u=e.selectedValue,b=e.tabRefs;return r.a.createElement("div",{className:n?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",l,{"tabs--block":t}),style:i},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:o()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return s(b,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function g(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,l=e.size,i=e.values,o=i;if(o[0].group){var c=_.groupBy(o,"group");o=Object.keys(c).map((function(e){return{label:e,options:c[e]}}))}return r.a.createElement(s.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:o,isClearable:n,placeholder:t,value:i.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,s=e.groupId,i=e.label,o=e.placeholder,c=e.select,h=e.size,w=(e.style,e.values),O=e.urlKey,j=Object(b.a)(),f=j.tabGroupChoices,v=j.setTabGroupChoices,y=Object(l.useState)(n),N=y[0],k=y[1];if(null!=s){var T=f[s];null!=T&&T!==N&&k(T)}var _=function(e){k(e),null!=s&&v(s,e)},I=[],S=function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=u.a.parse(window.location.search);e[O]&&k(e[O])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(h||"md")},i&&r.a.createElement("div",{className:"margin-vert--sm"},i),w.length>1&&(c?r.a.createElement(g,Object(a.a)({changeSelectedValue:_,handleKeydown:S,placeholder:o,selectedValue:N,size:h,tabRefs:I},e)):r.a.createElement(m,Object(a.a)({changeSelectedValue:_,handleKeydown:S,selectedValue:N,tabRefs:I},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},341:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}}}]);