import { InstantSearch, SearchBox, Hits, Snippet } from 'react-instantsearch-hooks-web'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const searchClient = instantMeiliSearch(
  'https://app-meilisearchcote-prod-001.azurewebsites.net',
  'aa45f3a7-48d5-4a41-bf8a-503a0cbc6ad7'
)

function Hit({ hit }) {
  return <Snippet key={hit} hit={hit} attribute="body" className="h-4" />
}

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="blog-post">
      <SearchBox searchAsYouType={true} placeholder="Search"></SearchBox>
      <Hits hitComponent={Hit} />
      {/* <Autocomplete /> */}
    </InstantSearch>
  )
}

import { useConnector } from 'react-instantsearch-hooks-web'
import connectAutocomplete from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete'

import type {
  AutocompleteConnectorParams,
  AutocompleteWidgetDescription,
} from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete'

export type UseAutocompleteProps = AutocompleteConnectorParams

export function useAutocomplete(props?: UseAutocompleteProps) {
  return useConnector<AutocompleteConnectorParams, AutocompleteWidgetDescription>(
    connectAutocomplete,
    props
  )
}

export function Autocomplete(props: UseAutocompleteProps) {
  const { indices, currentRefinement, refine } = useAutocomplete(props)

  return <>{/* Your JSX */}</>
}
