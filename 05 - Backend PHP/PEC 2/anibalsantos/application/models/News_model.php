<?php
defined('BASEPATH') or exit('No direct script access allowed');

class News_Model extends CI_Model
{

    public function __construct()
    {
        $this->load->database();
    }

    public $table = '_news';

    public function getNews($slug = false)
    {
        if ($slug === false) {
            $news = $this->db->get($this->table);
            return $news->result_array();
        }

        $data = $this->db->get_where('_news', array('slugNew' => $slug));
        return $data ? $data->row_array() : false;
    }


}
