<?php

return function ($kirby) {

    // Check if we have a Htmx Request
    $isHtmxRequest = false;
    $r = $kirby->request()->headers();
    if(array_key_exists('Hx-Request', $r)) {
        if($r['Hx-Request']) {
            $isHtmxRequest = true;
        }
    }

    return [
        'isHtmxRequest' => $isHtmxRequest,
    ];
};