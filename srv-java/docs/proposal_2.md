
### Project

```
src
 └── main
     ├── java
     │   └── com
     │       └── ksike
     │           └── buyme
     │               ├── articles
     │               │   ├── controller
     │               │   │   └── ArticleController.java
     │               │   ├── service
     │               │   │   └── ArticleService.java
     │               │   ├── model
     │               │   │   └── Article.java
     │               │   ├── repository
     │               │   │   └── ArticleRepository.java
     │               │   ├── dto
     │               │   │   └── ArticleDto.java
     │               │   ├── mapper
     │               │   │   └── ArticleMapper.java
     │               │   └── graphql
     │               │       └── ArticleGraphQL.java
     │               ├── categories
     │               │   ├── controller
     │               │   │   └── CategoryController.java
     │               │   ├── service
     │               │   │   └── CategoryService.java
     │               │   ├── model
     │               │   │   └── Category.java
     │               │   ├── repository
     │               │   │   └── CategoryRepository.java
     │               │   ├── dto
     │               │   │   └── CategoryDto.java
     │               │   ├── mapper
     │               │   │   └── CategoryMapper.java
     │               │   └── graphql
     │               │       └── CategoryGraphQL.java
     │               ├── shared
     │               │   ├── utils
     │               │   │   └── DateUtils.java
     │               │   └── exception
     │               │       ├── NotFoundException.java
     │               │       └── ValidationException.java
     │               └── BuymeApplication.java
     └── test
         └── java
             └── com
                 └── ksike
                     └── buyme
                         ├── articles
                         │   └── controller
                         │       └── ArticleControllerTest.java
                         ├── categories
                         │   └── controller
                         │       └── CategoryControllerTest.java
                         └── shared
                             └── utils
                                 └── DateUtilsTest.java
```