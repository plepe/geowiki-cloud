<?php
$eventDispatcher = \OC::$server->getEventDispatcher();
$eventDispatcher->addListener(
	'OCA\Files::loadAdditionalScripts',
	function () {
		$policy = new \OC\Security\CSP\ContentSecurityPolicy();
		$policy->setAllowedImageDomains(['*']);
		\OC::$server->getContentSecurityPolicyManager()->addDefaultPolicy($policy);

		//load the required files
		OCP\Util::addscript('geowiki', '../build/editor');
		OCP\Util::addscript('geowiki', '../node_modules/leaflet/dist/leaflet');
		OCP\Util::addscript('geowiki', '../node_modules/leaflet-draw/dist/leaflet.draw');
		OCP\Util::addStyle('geowiki', 'style');
		OCP\Util::addStyle('geowiki', '../node_modules/leaflet/dist/leaflet');
		OCP\Util::addStyle('geowiki', '../node_modules/leaflet-draw/dist/leaflet.draw');
	});


$eventDispatcher->addListener(
	'OCA\Files_Sharing::loadAdditionalScripts',
	function () {
		OCP\Util::addScript('geowiki', '../build/editor');
		OCP\Util::addStyle('geowiki', 'style');
	});
