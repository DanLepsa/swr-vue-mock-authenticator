# mock-authenticator-vue

Mock authenticator app that shows the value of SWR.
Open 2 tabs at the same time, and click on the update button to simulate an update of the codes. Check the other tab to see the values are already up to date.
If needed, using the 'mutate' function from the useSWR would automatically refetch the updated codes.

## Start the json server

```
json-server --watch db.json
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```
