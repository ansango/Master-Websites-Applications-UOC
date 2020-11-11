<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />

    <?php
    foreach ($css_files as $file) : ?>
        <link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />

    <?php endforeach; ?>
    <?php foreach ($js_files as $file) : ?>

        <script src="<?php echo $file; ?>"></script>
    <?php endforeach; ?>

    <style type='text/css'>
        body {
            font-family: Arial;
            font-size: 14px;
        }

        a {
            color: blue;
            text-decoration: none;
            font-size: 14px;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4"><?php echo $title; ?></h1>
            <p class="lead"><?php echo $subtitle; ?></p>
        </div>
    </div>
    <div style='height:20px;'></div>
    <div>
        <?php echo $output; ?>
    </div>
</body>

</html>