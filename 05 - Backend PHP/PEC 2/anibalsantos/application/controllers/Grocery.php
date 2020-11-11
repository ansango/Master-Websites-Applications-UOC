<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Grocery extends CI_Controller
{

    function __construct()
    {
        parent::__construct();

        $this->load->database();
        $this->load->helper('url');
        $this->load->library('grocery_CRUD');
    }

    public function index()
    {
        $crud = new grocery_CRUD();
        $crud->set_theme('datatables');
        $crud->set_table('_news');
        $crud->set_subject('Noticia');
        $crud->required_fields('id', 'title', 'author', 'text', 'date', 'cat', 'slug');
        $crud->set_field_upload('img', 'img');
        $output = $crud->render();

        $this->_grocery_output($output);
    }

    function _grocery_output($output = null)

    {
        $data['title'] = "Grocery CRUD NEWS";
        $data['subtitle'] = "Crea nuevo contenido";

        $this->load->view('templates/header', $data);
        $this->load->view('pages/grocery.php', $output);
        $this->load->view('templates/footer');
    }
}
