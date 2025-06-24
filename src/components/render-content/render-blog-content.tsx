import parse, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { Element, Text, Node } from 'domhandler';
import React from 'react';

export const renderBlogContent = (htmlString: string) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: Node) => {
      if (domNode.type === 'tag') {
        const element = domNode as Element;

        if (element.name === 'img' || element.name === 'br') {
          return <></>;
        }

        if (element.name === 'p') {
          const processedChildren = element.children?.map((child) => {
            if (child.type === 'tag') {
              const tagChild = child as Element;
              if (tagChild.name === 'img' || tagChild.name === 'br') {
                return <></>;
              }
            }
            if (child.type === 'text') {
              const textChild = child as Text;
              return { ...textChild, data: textChild.data.trim() };
            }
            return child;
          });

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const reactChildren = domToReact(processedChildren as any, options);

          // SAFELY flatten and extract text content
          const toText = (nodes: React.ReactNode): string => {
            if (typeof nodes === 'string') return nodes;
            if (typeof nodes === 'number') return nodes.toString();
            if (Array.isArray(nodes)) {
              return nodes.map(toText).join('');
            }
            if (React.isValidElement(nodes)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const children = (nodes as React.ReactElement<any>).props
                .children;
              return toText(children);
            }
            return '';
          };
          const paragraphContentString = toText(reactChildren);

          if (!paragraphContentString.trim()) {
            return <></>;
          }

          return (
            <p className="font-normal text-[10px] md:text-base lg:text-lg text-gray-60">
              {reactChildren}
            </p>
          );
        }
      }

      return undefined;
    },
  };

  return parse(htmlString, options);
};
