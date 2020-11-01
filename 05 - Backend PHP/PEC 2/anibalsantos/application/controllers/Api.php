<?php
defined('BASEPATH') or exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Api extends RestController
{

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        $this->load->model('news_model');
    }

    public function news_get()
    {
        $news = $this->news_model->getNews();

        $id = $this->get('id');
        
        if ($id === null) {
            // Check if the news data store contains news
            if ($news) {
                // Set the response and exit
                $this->response($news, 200);
            } else {
                // Set the response and exit
                $this->response([
                    'status' => false,
                    'message' => 'No users were found'
                ], 404);
            }
        } else {
            if (array_key_exists($id, $news)) {
                $this->response($news[$id], 200);
            } else {
                $this->response([
                    'status' => false,
                    'message' => 'No such user found'
                ], 404);
            }
        }
    }
}
