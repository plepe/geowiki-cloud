<?php
$eventDispatcher = \OC::$server->getEventDispatcher();
$eventDispatcher->addListener(
	'OCA\Files::loadAdditionalScripts',
	function () {
		$policy = new \OC\Security\CSP\ContentSecurityPolicy();
		$policy->setAllowedImageDomains(['*']);
		\OC::$server->getContentSecurityPolicyManager()->addDefaultPolicy($policy);

		//load the required files
		OCP\Util::addscript('geoedit', '../build/editor');
		OCP\Util::addscript('geoedit', '../node_modules/leaflet/dist/leaflet');
		OCP\Util::addscript('geoedit', '../node_modules/leaflet-draw/dist/leaflet.draw');
		OCP\Util::addStyle('geoedit', 'style');
		OCP\Util::addStyle('geoedit', '../node_modules/leaflet/dist/leaflet');
		OCP\Util::addStyle('geoedit', '../node_modules/leaflet-draw/dist/leaflet.draw');
	});


$eventDispatcher->addListener(
	'OCA\Files_Sharing::loadAdditionalScripts',
	function () {
		OCP\Util::addScript('geoedit', '../build/editor');
		OCP\Util::addStyle('geoedit', 'style');
	});
