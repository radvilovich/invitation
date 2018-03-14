<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 3/14/18
 * Time: 00:04
 */


//echo json_encode($_GET);

if($_GET['name']) {
    $goods = file_get_contents('goods.json');
    $goodsArr = json_decode($goods, 1);
    foreach($goodsArr as $key => $value) {
        if ($value['by'] === $_GET['name'] && $_GET['by'] != '') {
            $goodsArr[$key]['by'] = "";
            $goodsArr[$key]['reserved'] = "";
        }
    }
    file_put_contents('goods.json', json_encode($goodsArr));

    echo 'unreserved';
} else if($_GET['reset'] === 1) {
    $goods = file_get_contents('_goods.json');

    file_put_contents('goods.json', $goods);

    echo 'reset';
}

