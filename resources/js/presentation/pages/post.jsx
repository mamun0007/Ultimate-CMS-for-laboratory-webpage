import React from "react";
import { useFetchPost } from "../../infrastructure/APIHandler";
import Layout from "../layouts/layout";
import { useParams } from "react-router-dom";
export const Post = () => {
    let { slug } = useParams();
    const { data, loading } = useFetchPost({
        slug: slug,
    });

    const post = data[0];
    const found = post ? true : false;
    return (
        found && (
            <Layout
                title={post.title.en}
                header={<></>}
                keywords=""
                description=""
                found={found}
            >
                <article className="w3-container">
                    <section>
                        <div className="w3-card-4">
                            <header className="w3-container w3-teal">
                                <h1 className="w3-center">{post.title.en}</h1>
                            </header>
                            <div
                                className="w3-container w3-padding"
                                style={{ width: "75%" }}
                            >
                                <img
                                    src={post.image}
                                    alt={post.slug}
                                    className="w3-round w3-margin"
                                />
                                <p
                                    className="w3-margin"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.en,
                                    }}
                                ></p>
                            </div>
                            <footer className="w3-container w3-light-grey">
                                {post.tags.map((tag, index) => (
                                    <h5
                                        key={index}
                                        className="w3-tag w3-teal w3-round"
                                    >
                                        {tag}
                                    </h5>
                                ))}
                            </footer>
                        </div>
                    </section>
                </article>
            </Layout>
        )
    );
};
export default Post;