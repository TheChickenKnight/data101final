// components/Article.jsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Skeleton } from './ui/skeleton';

/**
 * paragraphs: Array of either
 *  • string | JSX                       (no id)
 *  • { id: string, content: string|JSX }  (with id)
 */
export default function Article({
  title,
  subtitle,
  coverImage,
  paragraphs = [],
  accordionSections = [],
}) {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-black dark:text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-slate-600 dark:text-slate-200">{subtitle}</p>}
        <Separator className="my-4"/>

        {coverImage && (
          <Image
            src={coverImage.src}
            alt={coverImage.alt || title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full mb-6"
          />
        )}

        {paragraphs.map((p, i) => {
          // if it’s the “object form”, pull id+content
          if (typeof p === 'object' && 'content' in p && p.content == "skeleton") {
            return (
              <div key={i} id={p.id} >
                <Skeleton className="h-3 w-full mb-3"/>
                <Skeleton className="h-3 w-full mb-3"/>
                <Skeleton className="h-3 w-10/12 mb-3"/>
                <Skeleton className="h-3 w-11/12 mb-3"/>
                <Skeleton className="h-3 w-9/12 mb-3"/>
                <Skeleton className="h-3 w-full mb-3 mt-8"/>
                <Skeleton className="h-3 w-full mb-3"/>
                <Skeleton className="h-3 w-10/12 mb-3"/>
                <Skeleton className="h-3 w-11/12 mb-3"/>
                <Skeleton className="h-3 w-9/12 mb-3"/>
                <Skeleton className="h-3 w-full mb-3 mt-8"/>
                <Skeleton className="h-3 w-full mb-3"/>
                <Skeleton className="h-3 w-10/12 mb-3"/>
                <Skeleton className="h-3 w-11/12 mb-3"/>
                <Skeleton className="h-3 w-9/12 mb-3"/>
                <Skeleton className="h-3 w-full mb-3 mt-8"/>
                <Skeleton className="h-3 w-full mb-3"/>
                <Skeleton className="h-3 w-10/12 mb-3"/>
                <Skeleton className="h-3 w-11/12 mb-3"/>
                <Skeleton className="h-3 w-9/12 mb-3"/>
              </div>
            );
          }

          if (p && typeof p === 'object' && 'content' in p) {
            return (
              <p
                key={p.id}
                id={p.id}
                className="text-lg text-black dark:text-white mb-4"
              >
                {p.content}
              </p>
            );
          }

          // otherwise it’s a plain string or JSX fragment
          return (
            <p key={i} className="text-lg text-black dark:text-white mb-4">
              {p}
            </p>
          );
        })}

        {accordionSections.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            {accordionSections.map(({ id, title: t, content }) => (
              <AccordionItem value={id} key={id}>
                <AccordionTrigger className="text-xl text-black dark:text-white">
                  {t}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-black dark:text-white">
                  {content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  coverImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  paragraphs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
          .isRequired,
      }),
    ])
  ),
  accordionSections: PropTypes.array, // …same as before
};
