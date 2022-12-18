import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Highlighter from "react-highlight-words";

import { getTexts } from "~/models/text.server";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import { CardActions, Button, CardContent, Box } from "@mui/material";
import Typography from '@mui/material/Typography';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  return json(
    {
      texts: await getTexts(query),
      query
    }
  )
};

export default function Index() {
  const { texts, query } = useLoaderData()
  return (
    <Container maxwidth="lg" >
      <Box sx={{mx: 'auto', my: '1rem', p: '1rem', maxWidth: '700px'}}>
        {texts.length === 0 ?
        (
          <>
          <Typography variant="h3">沒有找到搜尋結果</Typography>
          <Link to="/">返回首頁</Link>
          </>
        )
        :
        (<Typography variant="body1">找到 {texts.length} 筆搜尋結果</Typography>)}
      </Box>
    {texts.map(t => (
    <Card   elevation={3}  sx={{mx: 'auto', my: '1rem', p: '1rem', maxWidth: '700px'}} key={t.id}>
      <CardContent>
      <Typography variant="body1">
      <Highlighter
        searchWords={[query]}
        autoEscape={true}
        textToHighlight={t.zh}
        />
      </Typography>
      <Box sx={{textAlign:"right"}}>
      <Button target="_blank" href={`https://www.upmedia.mg/forum_info.php?SerialNo=${t.article.articleId}`} size="small" sx={{ml: "auto"}}>
          {t.article.zhTitle}
        </Button>
        </Box>
      <hr />
      <Typography variant="body1">
        <Highlighter
        searchWords={[query]}
        autoEscape={true}
        textToHighlight={t.en}
        />
      </Typography>
      <Box sx={{textAlign:"right"}}>
      <Button target="_blank" href={t.article.sourceLink} size="small" sx={{ml: "auto"}}>{t.article.enTitle}</Button>
</Box>
      </CardContent>
      </Card>))}
    </Container>
  );
}