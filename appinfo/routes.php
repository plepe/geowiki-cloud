<?php
return array(
  'routes' => array(
    array(
      'name' => 'FileHandling#load',
      'url' => '/ajax/loadfile',
      'verb' => 'GET'
    ),
    array(
      'name' => 'FileHandling#save',
      'url' => '/ajax/savefile',
      'verb' => 'PUT'
    ),
  ),
);
