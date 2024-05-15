const infos = {
  nome: "Camila Mendes",
  cargo: "Estudante de Programação e Data",
  imagem: "https://github.com/camilamesquita.png",
  github: "https://github.com/camilamesquita/camilamesquita",
  linkedin: "https://www.linkedin.com/in/cameend/",
  twitter: "https://x.com/webcorna_/status/1790209457705599152",
  minibio:
    "Me especializando em programação voltada para análise de dados com Python Power BI, Excel and a little bit of HTML, CSS e JavaScript. Procurando por oportunidades para adquirir mais experiência e conhecimento."
};

document.getElementById("imagem").src = infos.imagem;
document.getElementById("nome").innerHTML = infos.nome;
document.getElementById("cargo").innerHTML = infos.cargo;
document.getElementById("minibio").innerHTML = infos.minibio;
document.getElementById("github").href = infos.github;
document.getElementById("linkedin").href = infos.linkedin;
document.getElementById("twitter").href = infos.twitter;
