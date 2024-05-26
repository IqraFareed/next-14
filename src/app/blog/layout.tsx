import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    // if you want a title that completly ignores title.templat set in the parent segments
    // you dont't need to define absoule in layout inst in chhild page make an obj
    absolute: "",
    default:
      "This can be use for fallback title for child who don't explicity define titles ",

    /// to create dynamic titles by adding a prefix oe a suffix you can use title.template
    /// this property is applied to child route segmnets and not the segment in which it is defined
    ///
    template: "%s | codewhithiqra",
  },
};
const BlogLayout = () => {
  return <div>BlogLayout</div>;
};

export default BlogLayout;
