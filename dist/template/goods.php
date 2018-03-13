<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 3/14/18
 * Time: 00:04
 */


//echo json_encode($_GET);

$goods = file_get_contents('goods.json');
$goodsArr = json_decode($goods, 1);

foreach($goodsArr as $key => $value) {
    if ($value === $_GET['name']) {
        $goodsArr[$key]['by'] = $_GET['by'];
        $goodsArr[$key]['reserved'] = 1;
    }
}

file_put_contents('goods.json', json_encode($goodsArr));

echo $goods;