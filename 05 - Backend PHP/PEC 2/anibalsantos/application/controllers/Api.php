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


    public function noticias_get()
    {

        $newsAll = $this->news_model->news_all_data();
        $id = $this->get('id');

        if ($id === null) {
            $this->response($newsAll, 200);
        } else {
            $newsById = $this->news_model->new_detail_data($id);
            $this->response($newsById, 200);
        }
    }

    public function categoria_get()
    {
        $newsAll = $this->news_model->news_all_data();
        $id = $this->get('id');
        
        if ($id === null) {
            $this->response($newsAll, 200);
        } else {
            $categoriesById = $this->news_model->category_detail_data($id);
            $this->response($categoriesById, 200);
        }
    }
}
