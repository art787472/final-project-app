import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getArticles } from "~/models/article.server";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export const loader = async () => {
  return json(
    {
      articles: await getArticles()
    }
  )
};

export default function Index() {
  const { articles } = useLoaderData()
  return (
    <Container maxwidth="lg">

    {articles.map(a => (<Card sx={{my: '1rem', mx:'auto', padding: '1rem'}} key={a.id}>{a.zhTitle}</Card>))}
    </Container>
  );
}