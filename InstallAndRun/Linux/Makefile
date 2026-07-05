################################################################################
#   Makefile for building the MMC-SERVER application packages for Debian Linux
#
#   30 June, 2026 - E M Thornber
#   Created
#
#	Copyright (c) 2026 Model Electronics Railway Group Ltd
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
APPDIR=${shell basename $(PWD)}
APPPKG := MMC-PKG.epm
VERSION=${shell npm pkg get version | tr -d '"'}

# Tools
EPM := $(shell which epm)
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -nsm -vv --output-dir ./ appname=${APPNAME} version=${VERSION} $(APPNAME)

all: deb

.PHONY: all deb

deb:
	$(RM) $@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPPKG) 2>&1 | tee $@-$(TS).log