import { Fragment } from 'react'

interface Product {
  title: string;
  description: string;
  image: {
    url: string
  }
}

export default function ProductItem({
  title = "hi there",
  description = "desc"
}) {
  return (
    <div>
      {title}
      {description}
    </div>
  );
}