<?php

return function ($page) {

    $limit    = 2;
    $entries = $page->children()->paginate($limit);
    $pagination = $entries->pagination();

    return [
        'entries' => $entries,
        'pagination' => [
            'page' => $pagination->page(),
            'pages' => $pagination->pages(),
            'next' => $pagination->nextPageUrl(),
            'prev' => $pagination->prevPageUrl(),
            'total' => $pagination->total(),
            'limit' => $pagination->limit(),
        ],
        'html' => '',
    ];
};