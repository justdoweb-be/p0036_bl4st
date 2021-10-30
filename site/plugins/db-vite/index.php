<?php

load([
    'Db\\Vite' => 'src/Vite.php',
], __DIR__);

Kirby::plugin('Db/vite', [
    'snippets' => [
        'vite/development' => __DIR__ . '/snippets/development.php',
        'vite/styles' => __DIR__ . '/snippets/styles.php',
        'vite/scripts' => __DIR__ . '/snippets/scripts.php',
    ],
    'siteMethods' => [
        'viteDevelopmentMode' => function() {
            return Db\Vite::isDevelopmentMode();
        },
        'viteCssProductionFiles' => function() {
            return Db\Vite::cssProductionFiles();
        },
        'viteJsProductionFiles' => function() {
            return Db\Vite::jsProductionFiles();
        },
    ],
]);