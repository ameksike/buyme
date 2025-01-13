import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/client.write";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const View = async ({ id }: { id: string }) => {
    const results = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id });

    const totalViews = results?.views || 0;

    await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit();

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">Views: {totalViews}</span>
            </p>
        </div>
    );
};
export default View;