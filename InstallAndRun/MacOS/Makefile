################################################################################
#
#   31 May, 2026 - E M Thornber
#   Created
#
################################################################################

#APPNAME=${shell npm pkg get name | tr -d '"'}
APPNAME=MMC-SERVER
USRN=${shell whoami}
USRG=${shell id -gn}
VERSION=${shell npm pkg get version | tr -d '"'}
ARCH := arm
EPM := $(shell which epm)
ODIR := InstallAndRun/MacOS
APPDEFN := InstallAndRun/MacOS/$(APPNAME).epm
RM=/bin/rm -f
TS=`date "+%y%m%d-%H%M"`

all: pkgs

pkgs: portable macos

macos portable :
	$(RM) $(ODIR)/$@-*.log
	$(EPM) -a $(ARCH) -f $@ -vv --output-dir $(ODIR) appname=${APPNAME} usrn=${USRN} usrg=${USRG} version=${VERSION} $(APPNAME) $(APPDEFN) 2>&1 | tee $(ODIR)/$@-$(TS).log