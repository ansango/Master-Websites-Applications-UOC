<div class="content-news">
    <?php foreach ($news as $news_item) : ?>
        <section class="section-new" id="<?php echo $news_item['idNew']; ?>">
            <div class="subtitle-new">
                <h2>
                    <a href="<?php echo site_url('news/' . $news_item['slugNew']); ?>">
                        <?php echo $news_item['titleNew']; ?>
                    </a>
                </h2>
            </div>
            <div class="container-new">
                <p><?php echo $news_item['authorNew']; ?></p>
                <img src="/anibalsantos/img/<?php echo $news_item['imgNew']; ?>" alt="" srcset="">
                <p><?php echo $news_item['catNew']; ?></p>
                <p><?php echo $news_item['dateNew']; ?></p>
            </div>
        </section>
    <?php endforeach; ?>
</div>