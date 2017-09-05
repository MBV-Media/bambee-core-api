<?php

use Sami\Sami;
use Sami\RemoteRepository\GitHubRemoteRepository;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$projectDir = dirname(__DIR__);
$buildDir = $projectDir . '/docs';
$srcDir = dirname($projectDir) . '/bambee-core';


$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($srcDir)
;

$versions = GitVersionCollection::create($srcDir)
    ->add('master', '1.7.0')
    ->addFromTags('1.6.6')
    ->addFromTags('1.6.5')
    ->addFromTags('1.6.4')
    ->addFromTags('1.6.3')
    ->addFromTags('1.6.2')
    ->addFromTags('1.6.1')
    ->addFromTags('1.6.0')
    ->addFromTags('1.5.0')
    ->addFromTags('1.4.1')
    ->addFromTags('1.4.0')
;

return new Sami($iterator, [
    'theme'                => 'default',
    'versions'             => $versions,
    'title'                => 'Bambee Core API',
    'build_dir'            => $buildDir . '/%version%',
    'cache_dir'            => $projectDir . '/cache/%version%',
    'remote_repository'    => new GitHubRemoteRepository('MBV-Media/bambee-core', $srcDir),
    'default_opened_level' => 2,
]);