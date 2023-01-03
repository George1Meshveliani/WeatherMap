<?php

namespace Drupal\weather_map\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class WeatherMapController.
 *
 * Written by George Meshveliani <g.meshveliani@omedia.ge>, December 2022
 *   @package Drupal\weather_map\Controller
 *
 */

class WeatherMapController extends ControllerBase {

  /**
   * @return string[]
   */
  public function content() {
    return [
      '#theme' => 'weather_map',
    ];
  }

}
