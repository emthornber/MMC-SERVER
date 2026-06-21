################################################################################
#
#   12 June, 2026 - E M Thornber
#   Created
#
################################################################################

APPNAME=MMC-SERVER
VERSION=${shell npm pkg get version | tr -d '"'}
EPM := $(shell which epm)
ODIR := InstallAndRun/Linux
APPFILES := InstallAndRun/Linux/MMC-FILES.epm
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

EPMARGS := -vv --output-dir $(ODIR) appname=${APPNAME} version=${VERSION} $(APPNAME)

all: pkgs

pkgs: portable deb

.PHONY: all pkgs deb portable

deb portable :
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a all -f $@ ${EPMARGS} $(APPFILES) 2>&1 | tee $(ODIR)/$@-$(TS).log
