<?php
defined('BASEPATH') or exit('No direct script access allowed');

class News_Model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    public function news_all_data($slug = FALSE)
    {
        if ($slug === FALSE) {
            $this->db->order_by("date", "desc");
            $query = $this->db->get('_news');
            return $query->result_array();
        }
        $query = $this->db->order_by("date", "desc")->get_where('_news', array('slug' => $slug));
        return $query->row_array();
    }

    public function new_detail_data($id)
    {
        return $this->db->select('*')->from('_news')->where('id', $id)->get()->row();
    }

    public function category_detail_data($id)
    {
        return $this->db->select('id,title,date')->from('_news')->where('cat', $id)->get()->result();
    }
}
