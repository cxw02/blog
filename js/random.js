var posts=["2024/01/29/hello-world/","2023/08/31/第一篇文章/","2024/01/30/第七篇文章/","2024/01/30/第三篇文章/","2024/01/30/第九篇文章/","2023/08/31/第二篇文章/","2024/01/30/第五篇文章/","2024/01/30/第六篇文章/","2024/01/30/第八篇文章/","2024/01/30/第四篇文章/","2024/01/30/第十篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };