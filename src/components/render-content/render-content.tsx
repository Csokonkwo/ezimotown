import parse, { HTMLReactParserOptions, domToReact } from 'html-react-parser';
import { Element, Text, Node } from 'domhandler';
import React from 'react';
export const renderContent = (htmlString: string) => {
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

          const reactChildren = domToReact(
            processedChildren as (Element | Text)[],
            options,
          );

          // SAFELY flatten and extract text content
          const toText = (nodes: React.ReactNode): string => {
            if (typeof nodes === 'string') return nodes;
            if (typeof nodes === 'number') return nodes.toString();
            if (Array.isArray(nodes)) {
              return nodes.map(toText).join('');
            }
            if (React.isValidElement(nodes)) {
              const children = (
                nodes as React.ReactElement<{ children?: React.ReactNode }>
              ).props.children;
              return toText(children);
            }
            return '';
          };
          const paragraphContentString = toText(reactChildren);

          if (!paragraphContentString.trim()) {
            return <></>;
          }

          return (
            <p className="font-helvetica text-[#FFE9D5] font-normal text-[14px] sm:text-sm lg:text-lg text-start lg:max-w-[1389px] mb-4">
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
