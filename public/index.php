<?php

require '../vendor/autoload.php';

session_start();

$app = new \Slim\Slim();

$app->config(array(
    'debug' => true,
    'templates.path' => '../templates'
));

$app->get('/link/latest', function () use ($app) {
	$data = array( 
			
				'links' => array( 	
		
					array( 'url' => 'http://bkpk.me/i-became-a-digital-nomad-it-has-its-challenges-but-its-worth-it/',
						   'title' => 'Making a living as a programmer while traveling around the world.' ),
					
					array( 'url' => 'http://www.theregister.co.uk/2013/06/21/rbs_chernobyl_one_year_on',
						   'title' => 'RBS Mainframe Meltdown: A year on, the fallout is still coming' ),
						
					array( 'url' => 'http://onloop.net/transit/',
						   'title' => 'transit.js - Client-side, schedule-driven transit maps.' )
				
	));
	
	if( isset( $_SESSION['data'] ) ) {
		$data['links'] = array_merge( array_reverse( $_SESSION['data'] ), $data['links'] );
	}
	
    echo json_encode( $data );
});

$app->post('/link/submit', function () use ($app) {
	if( ! isset( $_SESSION['data'] ) ) {
		$_SESSION['data'] = array();
	}
	$data = json_decode(file_get_contents('php://input'));

	$_SESSION['data'][] = array( 'url' => $data->url, 
								 'title' => $data->title );
	
	echo json_encode($_SESSION['data']);
});

$app->get('/', function() use ($app) {
    $app->render('index.php');
});

$app->run();

