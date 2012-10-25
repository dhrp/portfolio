<?php

echo "start";

$shops_myshopify_domain = 	"creditcovers.myshopify.com" ;
$api_key 				=	"67a4b4c8d625791b70eca92980662a49" ;
$password				=	"94ea4ad6b6b6ebc2ee390c6892cb6f76" ;


$shopify = shopify_api_client($shops_myshopify_domain, NULL, $api_key, $password, true);

shopify



function shopify_api_client($shops_myshopify_domain, $shops_token, $api_key, $secret, $private_app=false)
	{
		$password = $private_app ? $secret : md5($secret.$shops_token);
		$baseurl = "https://$api_key:$password@$shops_myshopify_domain/";

		return function ($method, $path, $params=array(), &$response_headers=array()) use ($baseurl)
		{
			$url = $baseurl.ltrim($path, '/');
			$query = in_array($method, array('GET','DELETE')) ? $params : array();
			$payload = in_array($method, array('POST','PUT')) ? stripslashes(json_encode($params)) : array();
			$request_headers = in_array($method, array('POST','PUT')) ? array("Content-Type: application/json; charset=utf-8", 'Expect:') : array();

            echo $url;


			$response = curl_http_api_request_($method, $url, $query, $payload, $request_headers, $response_headers);
			$response = json_decode($response, true);

			if (isset($response['errors']) or ($response_headers['http_status_code'] >= 400))
				throw new ShopifyApiException(compact('method', 'path', 'params', 'response_headers', 'response', 'shops_myshopify_domain', 'shops_token'));

			return (is_array($response) and (count($response) > 0)) ? array_shift($response) : $response;
		};
	}

?>