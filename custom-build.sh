shopt -s extglob
# ---------------------------------------------------------
#  custom-build partial
# ---------------------------------------------------------
if [ -d build ]; then rm -Rf build; fi
VERSION="v$(cat VERSION)"
npm ci -force || exit 1
npm run build || exit 1
mkdir -p build/distributions/
cd dist/ || exit 1
zip -vr npm-artifact.zip .
rm -Rv !("npm-artifact.zip")
mv npm-artifact.zip ../build/distributions/
cd ../
echo "resetting application version placeholder index.tsx"
mv ./src/list.tsx.bak ./src/list.tsx

rm builder.sh