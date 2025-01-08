
### Project

```
src
 └── main
     ├── java
     │   └── com
     │       └── ksike
     │           └── buyme
     │               ├── application
     │               │   ├── controller
     │               │   │   └── ArticleController.java
     │               │   ├── graphql
     │               │   │   └── ArticleGraphQL.java
     │               │   ├── config
     │               │   │   ├── GraphQLConfig.java
     │               │   │   └── WebConfig.java
     │               │   └── BuymeApplication.java
     │               ├── domain
     │               │   ├── model
     │               │   │   └── Article.java
     │               │   ├── service
     │               │   │   └── ArticleService.java
     │               │   └── exception
     │               │       └── ArticleNotFoundException.java
     │               ├── infrastructure
     │               │   ├── adapter
     │               │   │   ├── repository
     │               │   │   │   └── ArticleRepository.java
     │               │   │   └── persistence
     │               │   │       ├── PostgresAdapter.java
     │               │   │       └── JpaArticleRepository.java
     │               │   └── config
     │               │       └── DatabaseConfig.java
     │               └── shared
     │                   ├── utils
     │                   │   └── DateUtils.java
     │                   └── dto
     │                       └── ArticleDto.java
     └── test
         └── java
             └── com
                 └── ksike
                     └── buyme
                         ├── application
                         │   └── controller
                         │       └── ArticleControllerIntegrationTest.java
                         ├── domain
                         │   └── service
                         │       └── ArticleServiceTest.java
                         └── infrastructure
                             └── adapter
                                 └── persistence
                                     └── PostgresAdapterIntegrationTest.java
```