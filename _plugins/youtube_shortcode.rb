require 'cgi'

module Jekyll
  class YouTubeTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @params = parse_params(markup)
    end

    def parse_params(markup)
      params = {}
      markup.scan(/(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)')/) do |key, double_val, single_val|
        params[key] = double_val || single_val
      end
      params
    end

    def render(context)
      video_id = CGI.escapeHTML((@params['id'] || '').strip)
      title = CGI.escapeHTML((@params['title'] || 'Watch video tutorial').strip)
      return '' if video_id.empty?

      page = context['page'] || {}
      page_url = page['url'].to_s
      collection = page['collection'].to_s
      if page_url.include?('one-page') || collection == 'documentation'
        %(<p class="video-print-link"><strong>Video tutorial:</strong> <a href="https://youtu.be/#{video_id}">#{title}</a></p>)
      else
        %(<div class="video-embed"><div class="video-embed-frame"><iframe src="https://www.youtube.com/embed/#{video_id}?rel=0" title="#{title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="video-embed-caption">Video: <a href="https://www.youtube.com/watch?v=#{video_id}" target="_blank" rel="noopener">#{title}</a></p></div>)
      end
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTubeTag)
