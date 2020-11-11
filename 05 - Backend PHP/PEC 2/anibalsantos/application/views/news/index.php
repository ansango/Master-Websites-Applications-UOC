<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4"><?php echo $title; ?></h1>
        <p class="lead"><?php echo $subtitle; ?></p>
    </div>
</div>
<div class="wrapper-news">
    <div class="content-news">
        <?php foreach ($news as $news_item) : ?>

            <div id="<?php echo $news_item['id']; ?>" class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="<?php echo site_url('news/' . $news_item['slug']); ?>">
                            <?php echo $news_item['title']; ?>
                        </a>
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted"><?php echo $news_item['author']; ?></h6>
                    <img class="card-img-top" src="<?= base_url() ?>/img/<?php echo $news_item['img']; ?>">
                    <div class="wrapper-category">
                        <a class="category"><?php echo $news_item['cat']; ?></a>
                        <a class="date"><?php echo $news_item['date']; ?></a>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>