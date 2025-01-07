This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Install 
- next.js
    - npx create-next-app@latest frontend
- Shadcn UI
    - npm i tailwindcss-animate
    - npm i @tailwindcss/typography
    - npx shadcn@latest init -d
    - npx shadcn@latest add button
    - npx shadcn@latest add skeleton

- auth
    - npm install next-auth@beta
    - npx auth secret
- cms
    - Sanity
        - Installing 
            - npm create sanity@latest -- --project d6hl73y8 --dataset production --template clean --typescript --output-path studio-buyme
                ```shell
                ? Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
                ? Do you want to use TypeScript? Yes
                ? Would you like an embedded Sanity Studio? Yes
                ? What route do you want to use for the Studio? /studio
                ? Select project template to use Clean project with no predefined schema types
                ? Would you like to add the project ID and dataset to your .env.local file? Yes
                ```
            - npm install next-sanity@canary
            - npm install --save sanity-plugin-markdown easymde@2
            - update `frontend\sanity.config.ts`
        - Generating types 
            - npx sanity@latest schema extract --path=./src/sanity/extract.json
            - check `frontend\src\sanity\extract.json`
            - create `frontend\sanity-typegen.json`
            - npx sanity@latest typegen generate
            - check `frontend\src\sanity\types.ts`
            - npm run typegen
        - Tools 
            - GET [Structure](http://localhost:3000/studio/structure)
            - GET [Vision](http://localhost:3000/studio/vision)
                - Simple query
                    `*[_type == "startup"]`
                - Complex query
                    ```js
                    *[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
                        _id, 
                        _creatatedAt,
                        title, 
                        slug, 
                        author -> {
                            _id,
                            name,
                            slug,
                            image, 
                            dio
                        },
                        views,
                        description,
                        category,
                        image
                    } 
                    ```
                - [More query details](./src/sanity/lib/queries.ts)


## References 
- [Sanity TypeGen](https://www.sanity.io/docs/sanity-typegen)
- [Generating types from your schema](https://www.sanity.io/learn/course/typescripted-content/generating-types-from-your-schema)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
