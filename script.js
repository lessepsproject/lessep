const urls = [
    "https://forum.albiononline.com/index.php/Board/6-Bugs/",
    "https://hannahmontana.sourceforge.net/",
    "https://www.shitexpress.com/",
    "https://jagger.es/camisetas/9-7-salpeper-negra-con-mangas.html#/3-talla-m",
    "https://www.farmersdatingapp.com/",
    "https://es.indeed.com/orientacion-laboral/buscar-trabajo/trabajo-mamporrero",
    "https://kayne-west.shop/shop/kanye-west-poster-new-home-decor-poster-kwm1809/",
    "https://storeeu.taylorswift.com/es-es/collections/sale",
    "https://youtu.be/BjP2hLxUaKs?si=7jgFtnffRwB3ifPF",
    "https://variasanotaciones.blogspot.com/2014/10/le-leche-de-mipalo.html?m=1",
    "https://www.renfe.com/es/es/ayuda/faqs",
    "https://youtu.be/OP75r_UXBgc?si=quCtCqqLftqNiF6_",
    "https://elpais.com/internacional/2025-02-20/el-coliving-la-nueva-version-del-alquiler-compartido-que-triunfa-entre-jovenes-europeos.html",
    "https://www.healthdirect.gov.au/gambling-addiction",
    "https://www.cheetos.com/cheetoshandsfree",
    "https://llegarasalto.com/guiafp/ciclos_loe.html",
    "https://www.nivea.com.ar/consejos/como-funciona-el-yoga-facial",
    "https://es.m.wikipedia.org/wiki/Aleaciones_de_cobre",
    "https://concepto.de/ciclo-del-agua/",
    "https://x.com/leaksshrek",
    "https://www.facebook.com/100000832823922/posts/pfbid02EFcJyXjqRVZcTNXeQyHJE86LvBdweMrUY3dYEYjS38LrHE8BxdKjCVoRhAKmndn1l/",
    "https://www.facebook.com/100000832823922/posts/pfbid025H1GaeZHiyrBPTPGUh7TzxtNFiur6eYDu6qmk9pgMvBYiRqNiwzLbRvfVZRCMQJRl/",
    "https://www.linkedin.com/posts/arturo-corona-24aa8659_el-divorcio-afecta-potencialmente-a-la-persona-activity-7273097615859146752-US5H?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAACeU3PUB50xTMc7ruzpL9emxv0XdklaIFCI&utm_campaign=whatsapp",
    "https://www.chess.com/es/club/cau-lac-bo-conan-va-fan-goku",
    "https://agrosphere.ge/ge/products/traktorebi",
    "https://www.legardy.com/lawyers?category=%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7",
    "https://beehive.bg/kucheta-suveti/podstrigvane-na-kucheta-u-doma-148",
    "https://buyee.jp/item/search/category/26360?lang=my&srsltid=AfmBOoqKykN1sn2wRceijCT8_vh31crI-hO5BWEXccvT51spDjMF4WJu",
    "https://www.wikihow.com/Prevent-Ingrown-Nails",
    "https://www.thisman.org/",
    "https://cat-bounce.com/",
    "https://www.buzzfeed.com/mx/jime_palacios/test-personalidad-caracter-elemento-tabla-periodica",
    "https://docs.google.com/forms/d/e/1FAIpQLSdS3S8FwIlXzWjqCg0KUMnz_JGY7lHoAqXZqittC6RYBqWmbA/viewform?pli=1",
    "https://english.mod.gov.il/About/Pages/DirectorGeneral.aspx",
    "https://images.app.goo.gl/8G2emc8KJxRheSVu5",
    "https://www.passportindex.org/passport/north-korea/",
    "https://www.larazon.es/bienestar/20221212/fzpppmdybzaqxohyf5dznqntmq.html",
    "https://www.scientology-madrid.es/personality-test/",
    "https://belaruskali.by/en/products/npk-udobreniya/",
    "https://support.hp.com/bo-es/product/setup-user-guides/samsung-xpress-sl-m2026-laser-printer-series/model/16462614",
    "https://tawkify.com/blog/dating-methods/best-indian-dating-apps-sites",
    "https://www.vizgazfutesvargacsaba.hu/vizszereles/",
    "https://g.co/kgs/KgwWVRA",
    "https://www.city.toyohashi.lg.jp/",
    "https://www.beijing2008.cn/en/acjg/bjaycscjh/lqzc/",
    "https://www.sunnylandethiopiatours.com/cycling-tour-in-ethiopia-2/",
    "https://www.amazon.es/Kangaroo-Jack-Alemania-Movie-Comedy/dp/B000CCL2A8",
    "https://maps.app.goo.gl/NJCRRL3nkhkb3AVs7?g_st=aw",
    "https://fundacionmona.org/el-centre/",
    "https://www.wikifeet.com/",
    "https://www.disneyplus.com/browse/entity-08bc9ce4-7e46-4383-a500-fd5305bb8f2e",
    "https://anemhi.com/es/visitar-desierto-tatacoa-libre/",
    "https://vegoutmag.com/shopping/vegan-condom-brands/",
    "https://play.google.com/store/apps/details?id=com.whisperarts.white.noise.whispy",
    "https://president.gov.by/en",
    "https://abogadoscristianos.es/",
    "https://extremaduraempresarial.es/mire/recurso/direccion-general-de-agricultura-y-ganaderia/",
    "https://www.adeslasdental.es/cita-online/",
    "https://menforharris.org/",
    "https://brendanfraser.com/index2012.html"
];

function redirectToRandomUrl() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    window.location.href = randomUrl;
}

window.onload = redirectToRandomUrl;
