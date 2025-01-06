import { StartupCard } from "@/components/StartupCard";
import { SearchForm } from "../../components/SearchForm";

interface Props {
  searchParams: Promise<{ query?: string }>
}
export default async function Home({ searchParams }: Props) {
  const query = (await searchParams).query;
  const { data: posts } = {
    data: [{
      _createdAt: new Date(),
      viewa: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image: "https://aigeeked.com/wp-content/uploads/2022/12/ai-image-generator.jpg",
      category: "Robots",
      title: "we rebots",
    }]
  } // await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions.
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any) => ( //StartupTypeCard
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
