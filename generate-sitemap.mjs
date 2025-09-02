import SitemapGenerator from 'sitemap-generator';

// Cria um gerador
const generator = SitemapGenerator('https://www.eletroportas.com.br', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml', // Caminho para salvar o sitemap gerado
  maxDepth: 0,
});

// Inicia o gerador
generator.start();

// Lida com erros
generator.on('error', (error) => {
  console.log(error);
});

// Notifica quando a geração do sitemap é concluída
generator.on('done', () => {
  console.log('Sitemap gerado com sucesso!');
});
