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
		OCP\Util::addStyle('geoedit', '../build/styles');
		OCP\Util::addStyle('geoedit', 'preview');
	});


$eventDispatcher->addListener(
	'OCA\Files_Sharing::loadAdditionalScripts',
	function () {
		OCP\Util::addScript('geoedit', '../build/editor');
		OCP\Util::addStyle('geoedit', '../build/styles');
		OCP\Util::addStyle('geoedit', 'preview');
	});
