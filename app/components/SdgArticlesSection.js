"use client";

import Image from "next/image";
import articleData  from "../data/articles";
import { AnimationOnScroll } from "react-animation-on-scroll";

/**
 * Crops the text depending on the provided maximum length.
 */
function cropText(aText, aMaxLength) {
    if (aText.length > aMaxLength) {
        return aText.substring(0, aMaxLength);
    }
    return aText;
}

function ArticleSectionTitle() {
    return (
        <div className="article-top my-20 font">
            <div className="relative flex items-center">
                <span className="flex-shrink text-gray-400 mr-5">
                    <h1 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-300 from-slate-50">More from the UN</span>
                    </h1>
                </span>
                <div className="flex-grow border-t-4 border-gray-500">
                </div>
            </div>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Featured stories across the United Nations and our worldwide family or agencies, funds, and Programmes.
            </p>
        </div>
    );
}

function ArticleEntry(aProps) {
    const { data } = aProps;
    const articleContent = data.article_description;
    return (
        <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft">
            <div
                className="my-10">
                <div className="container flex-row gap-10 grid lg:grid-cols-2">
                    <div className="image cursor-pointer">
                        <Image
                            className = "rounded-3xl"
                            src={data.article_image}
                            alt={`${data.article_title} preview image`}
                            width={750}
                            height={500}
                        />
                    </div>
                    <div className="text">
                        <div className="article-title mb-3">
                            <h2 className="text-3xl font-extrabold  dark:text-white">
                                <a href="#">{data.article_title}</a>
                            </h2>
                        </div>
                        <div className="article-date my-4">
                            <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">
                                {data.article_date}
                            </span>
                        </div>
                        <div className="article-content my-4">
                            <p className="text-lg text-justify font-normal text-gray-500 dark:text-gray-400">
                                {cropText(articleContent, 30)}…
                                <br/>
                                <span className="underline text-gray-300 cursor-pointer">See more...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>    
    );
}

function ArticleList() {
    return (
        <div>
            {articleData.map((article, index) => {
                return (
                    <ArticleEntry
                        data={article}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function ArticleBottom() {
    return (
        <div className="article-top my-20 font">
            <div className="relative flex items-center cursor-pointer">
                <div className="flex-grow border-t-4 border-gray-500">
                </div>
                <span className="flex-shrink text-gray-400 ml-5 mr-5">
                    <h3 className="mb-1 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-100 from-slate-50">
                            Load More
                        </span>
                    </h3>
                </span>
                <div className="flex-grow border-t-4 border-gray-500">
                </div>
            </div>
        </div>
    );
}

export default function SdgArticlesSection() {
    return (
        <div className="article-main w-full font-zen-dots">
            <ArticleSectionTitle />
            <ArticleList />
            <ArticleBottom />
        </div>
    );
}