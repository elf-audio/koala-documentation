# SEO fixes applied after all documents are read, before generators/render:
#
# 1. Chapter fragments (anything under a `chapters/` path) are rendered inline
#    into their parent chapter page and their standalone output directories are
#    deleted by duplicate_files.rb's post_write hook — so they must not appear
#    in sitemap.xml (they would all be 404s).
#
# 2. Tablet pages duplicate mobile content 1:1. Mark mobile as the canonical
#    variant (jekyll-seo-tag picks up `canonical_url`) and keep tablet URLs out
#    of the sitemap so search engines index a single copy.
Jekyll::Hooks.register :site, :post_read do |site|
  site_url = site.config['url'].to_s.chomp('/')

  %w[mobile tablet].each do |label|
    collection = site.collections[label]
    next if collection.nil?

    collection.docs.each do |doc|
      doc.data['sitemap'] = false if doc.url.include?('/chapters/')

      if label == 'tablet'
        doc.data['sitemap'] = false
        doc.data['canonical_url'] = "#{site_url}#{doc.url.sub('/tablet/', '/mobile/')}"
      end
    end
  end
end
