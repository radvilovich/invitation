<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 3/14/18
 * Time: 00:04
 */


//echo json_encode($_GET);

$goods = file_get_contents('_goods.json');

file_put_contents('goods.json', $goods);

echo $goods;