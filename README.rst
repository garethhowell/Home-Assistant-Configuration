19C Home Assistant Configuration
================================

Welcome to my `Home Assistant`_ configuration

This is the configuration for the primary `Home Assistant`_ server.
This server is contained on a dockerised SmartOS_ KVM_ running Linux_ in my home.

The primary server provides the integration and automation point for the home.
It also delivers the UI that is consumed by various devices around the house.

Some of the devices are actually controlled from another instance of `Home Assistant`.
This secondary server controls my ZWave_ network.

A secondary server is used because the ZWave controller needs to be fairly centrally located to ease network communications.
See Home-Assistant-Server2_ for more details

The UI is delivered using AppDaemon_ and HADashboard_.

Acknowledgements
================

The basic structure of my repository was modelled on that used by `Franck Nijhof`_

References
==========

`Home Assistant`: https://www.home-assistant.io/
SmartOS: https://www.joyent.com/smartos
KVM: https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine
Linux: https://en.wikipedia.org/wiki/Linux
AppDaemon: https://www.home-assistant.io/docs/ecosystem/appdaemon/
HADashboard: https://www.home-assistant.io/docs/ecosystem/hadashboard/
Home-Assistant-Server2: https://github.com/garethhowell/Home-Assistant-Server2
`Franck Nijhof`: https://github.com/frenck/home-assistant-config
