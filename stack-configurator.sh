#-------------------------------------------------------
# validate any required arguments you expect to be
# passed into the script via the CLI when your
# deployer.sh script is called
# set USE_EXPLAIN to output an explanation
# of how to use the script (required args)
#-------------------------------------------------------
#USE_EXPLAIN="./deployer.sh [environment]"
#validate_argument "DATASOURCE" ${1}

#DATASOURCE=${1}
#ENVIRONMENT=${2}
ENVIRONMENT=${1} # if no other arguments are required

#-------------------------------------------------------
# common parameters
#-------------------------------------------------------
set_environment ${ENVIRONMENT}

#-------------------------------------------------------
# deploy
#-------------------------------------------------------
initialize_deployment

DIST_PATH="build/distributions"

unzip ./${DIST_PATH}/npm-artifact.zip -d ${DIST_PATH}
rm ./${DIST_PATH}/npm-artifact.zip
unzip ./${DIST_PATH}/deployable-artifact.zip -d ${DIST_PATH}
rm ./${DIST_PATH}/deployable-artifact.zip

#-------------------------------------------------------
# upload npm assets to s3
#-------------------------------------------------------
fetch_aws_parameter_or_die "/${APP_CODE}/${TEAM_NAME}/infrastructure${ENVIRONMENT}/ui-assets-s3-bucket"
S3_BUCKET=${PARAM}
S3_ASSET_PATH="s3://${S3_BUCKET}/${APP_ROUTE}"
set_dynamic_config_parameter_or_die "S3ContextPath" "${S3_ASSET_PATH}"

echo "deploying cloud-formation stack ..."

deploy_no_upload

echo "uploading static assets to ${S3_ASSET_PATH} ..."
# aws s3 sync dist/ s3://2nnv-ph558-fusion-ui-assets-dev/company-surveillance --delete
aws s3 sync ./build/distributions/ ${S3_ASSET_PATH} --delete
invalidate_cloudfront_cache

exit_script
